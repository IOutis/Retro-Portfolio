"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface WordFadeInProps {
  className?: string;
  delay?: number;
  variants?: Variants;
}

// Define types for our content items
interface WordItem {
  type: 'word';
  content: string;
  id: string;
  needsBreak: boolean;
}

interface BreakItem {
  type: 'break';
  content: string;
  id: string;
}

type ContentItem = WordItem | BreakItem;

export function WordFadeIn({
  delay = 0.15,
  variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay },
    }),
  },
  className,
}: WordFadeInProps) {
  const text = "Name:\nMd. Mushtaq\n\nCurrent Qualification:\nB.E. II Year I.T.\n\nBrief:\nPassionate and driven, I am always on the lookout for new challenges and opportunities to turn my innovative ideas into impactful projects. With an insatiable curiosity and a dedication to continuous learning, I am eager to apply my knowledge and skills to make a difference. Let's create something extraordinary together!";

  // Split the text into lines first
  const lines = text.split('\n');

  // Process each line to get words while preserving line breaks
  const processedContent: ContentItem[] = lines.flatMap((line, lineIndex) => {
    // If the line is empty, return two line breaks
    if (line.trim() === '') {
      return [
        {
          type: 'break',
          content: '\n',
          id: `br1-${lineIndex}`
        },
        {
          type: 'break',
          content: '\n',
          id: `br2-${lineIndex}`
        }
      ];
    }

    // Split the line into words
    const words = line.split(/\s+/).filter(word => word.length > 0);

    // Process each word in the line
    return words.map((word, wordIndex) => ({
      type: 'word',
      content: word,
      id: `${lineIndex}-${wordIndex}`,
      needsBreak: word.endsWith(':') || word === 'Mushtaq' || word === 'I.T.'
    }));
  });

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className={cn(
        "font-mono text-left md:text-lg tracking-[-0.02em] text-primary",
        className,
      )}
    >
      {processedContent.map((item, i) => (
        item.type === 'break' ? (
          <br key={item.id} />
        ) : (
          <motion.span
            key={item.id}
            variants={variants}
            custom={i}
            className="inline-block mr-2"
          >
            {item.content}
            {item.needsBreak && <br />}
          </motion.span>
        )
      ))}
    </motion.div>
  );
}

export default WordFadeIn;
