import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Action = 'goal' | 'save' | 'crossbar' | 'curve';

const actions: Action[] = ['goal', 'save', 'crossbar', 'curve'];

export function Mascot() {
  const [open, setOpen] = useState(true);
  const [action, setAction] = useState<Action>('goal');
  const [active, setActive] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => triggerPlay(), 5200);
    return () => window.clearInterval(timer);
  }, []);

  const triggerPlay = () => {
    const next = actions[Math.floor(Math.random() * actions.length)];
    setAction(next);
    setActive(true);
    window.setTimeout(() => setActive(false), 1300);
  };

  const badgeText = action === 'goal' ? 'GOAL!' : action === 'save' ? 'SAVE!' : action === 'crossbar' ? 'CLANG!' : 'CURVE!';

  return (
    <div className="mascot-dock" aria-live="polite">
      <button className="mascot-icon-toggle" onClick={() => setOpen((v) => !v)} aria-label="toggle mascot">
        {open ? '🙈' : '👁'}
      </button>

      {open && (
        <motion.section
          className="mascot-card"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          onMouseEnter={triggerPlay}
        >
          {!imgFailed ? (
            <img src="/assets/messi-avatar.jpg" alt="Messi mascot" className="messi-photo" onError={() => setImgFailed(true)} />
          ) : (
            <div className="messi-fallback">M10</div>
          )}

          <div className="mascot-pitch">
            <div className={`messi-ball ${active ? `act-${action}` : ''}`}>⚽</div>
            <div className="goal-post">
              <span className="goal-net" />
            </div>
            <div className={`keeper ${active && action === 'save' ? 'jump' : ''}`}>🧤</div>
            {active && <div className="goal-badge">{badgeText}</div>}
          </div>
        </motion.section>
      )}
    </div>
  );
}
