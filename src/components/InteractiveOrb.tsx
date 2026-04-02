import { useEffect, useMemo, useRef, useState } from 'react';
import { animate, motion, useMotionValue } from 'framer-motion';
import { useI18n } from '../i18n';

type Scene = 'idle' | 'camp' | 'paris' | 'argentina';

const sceneData = {
  idle: {
    pos: '50% 50%',
    scale: 1.08,
    rotate: 0,
    captionZh: '把足球看成优化问题：路线是搜索，节奏是模型，胜利是收敛。',
    captionEn: 'Treat football as optimization: routes are search, rhythm is model design, victory is convergence.',
  },
  camp: {
    pos: '8% 68%',
    scale: 1.34,
    rotate: -3,
    captionZh: '诺坎普：像 A* 搜索一样，边路启发式引导中路最优解。',
    captionEn: 'Camp Nou: like A* search, wing heuristics guiding the central optimum.',
  },
  paris: {
    pos: '52% 20%',
    scale: 1.24,
    rotate: 0.5,
    captionZh: '巴黎：铁塔像位置编码，同一特征在不同时刻拥有不同语义。',
    captionEn: 'Paris: the tower acts like positional encoding, same features carry different semantics over time.',
  },
  argentina: {
    pos: '50% 86%',
    scale: 1.38,
    rotate: 2.6,
    captionZh: '阿根廷瀑布：像梯度流，沿最陡方向更新直到收敛。',
    captionEn: 'Argentina waterfall: like gradient flow, updating along steepest descent until convergence.',
  },
} as const;

export function InteractiveOrb() {
  const { t, locale } = useI18n();
  const [scene, setScene] = useState<Scene>('idle');
  const timer = useRef<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const current = useMemo(() => sceneData[scene], [scene]);

  useEffect(() => () => {
    if (timer.current) window.clearTimeout(timer.current);
  }, []);

  const resetIdle = () => {
    animate(x, 0, { type: 'spring', stiffness: 260, damping: 24 });
    animate(y, 0, { type: 'spring', stiffness: 260, damping: 24 });
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setScene('idle'), 850);
  };

  return (
    <section className="orb-wrap">
      <motion.div
        className="orb"
        drag
        dragMomentum={false}
        dragElastic={0.06}
        dragConstraints={{ left: -24, right: 24, top: -24, bottom: 24 }}
        style={{ x, y }}
        whileTap={{ cursor: 'grabbing', scale: 0.99 }}
        onDragStart={() => {
          if (timer.current) window.clearTimeout(timer.current);
        }}
        onDrag={(_, info) => {
          const { x: dx, y: dy } = info.offset;
          if (dy < -14) setScene('paris');
          else if (dx < -14 && dy > 2) setScene('camp');
          else if (dy > 14) setScene('argentina');
          else setScene('idle');
        }}
        onDragEnd={resetIdle}
      >
        <motion.img
          src="/assets/messi-microworld.jpg"
          alt="Messi micoworld"
          className="orb-bg"
          style={{ objectPosition: current.pos }}
          animate={{ scale: current.scale, rotate: current.rotate, opacity: 1 }}
          transition={{ duration: 0.32, ease: 'easeOut' }}
        />
        <span className="orb-glass" />
      </motion.div>

      <p className="orb-tip">{t('orbToggle')}</p>
      <p className="orb-text">{locale === 'zh' ? current.captionZh : current.captionEn}</p>
    </section>
  );
}
