import { useEffect, useRef } from 'react';

const PX = 8;
const W = 36;
const H = 20;
const SCENE_DURATION = 720; // ~12s per scene at 60fps

const BODY = [
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
] as const;

type Mood = 'neutral' | 'focus' | 'excited' | 'blink';

function px(ctx: CanvasRenderingContext2D, x: number, y: number, c: string) {
  ctx.fillStyle = c;
  ctx.fillRect(Math.round(x) * PX, Math.round(y) * PX, PX, PX);
}

function bubble(ctx: CanvasRenderingContext2D, lines: string[], x: number, y: number) {
  const width = Math.max(...lines.map((line) => line.length * 6 + 18), 144);
  const height = 12 + lines.length * 12;
  ctx.fillStyle = 'rgba(255,255,255,0.96)';
  ctx.fillRect(x, y, width, height);
  ctx.strokeStyle = '#4f4039';
  ctx.lineWidth = 3;
  ctx.strokeRect(x, y, width, height);
  ctx.fillStyle = '#4f4039';
  ctx.font = 'bold 11px monospace';
  lines.forEach((line, idx) => ctx.fillText(line, x + 8, y + 16 + idx * 12));
}

function heart(ctx: CanvasRenderingContext2D, x: number, y: number) {
  px(ctx, x + 1, y, '#f3a3c7');
  px(ctx, x + 3, y, '#f3a3c7');
  px(ctx, x, y + 1, '#f3a3c7');
  px(ctx, x + 1, y + 1, '#f3a3c7');
  px(ctx, x + 2, y + 1, '#f3a3c7');
  px(ctx, x + 3, y + 1, '#f3a3c7');
  px(ctx, x + 4, y + 1, '#f3a3c7');
  px(ctx, x + 1, y + 2, '#f3a3c7');
  px(ctx, x + 2, y + 2, '#f3a3c7');
  px(ctx, x + 3, y + 2, '#f3a3c7');
  px(ctx, x + 2, y + 3, '#f3a3c7');
}

function drawFace(ctx: CanvasRenderingContext2D, ox: number, oy: number, mood: Mood) {
  const eye = '#1d130f';
  if (mood === 'blink') {
    px(ctx, ox + 4, oy + 2, eye);
    px(ctx, ox + 5, oy + 2, eye);
    px(ctx, ox + 8, oy + 2, eye);
    px(ctx, ox + 9, oy + 2, eye);
    return;
  }

  px(ctx, ox + 4, oy + 2, eye);
  px(ctx, ox + 9, oy + 2, eye);

  if (mood === 'focus') {
    px(ctx, ox + 3, oy + 1, '#5a3227');
    px(ctx, ox + 10, oy + 1, '#5a3227');
  }

  if (mood === 'excited') {
    px(ctx, ox + 6, oy + 4, '#ffd9c6');
    px(ctx, ox + 7, oy + 4, '#ffd9c6');
  }
}

function drawCrab(ctx: CanvasRenderingContext2D, ox: number, oy: number, mood: Mood, wave = 0) {
  for (let y = 0; y < BODY.length; y++) {
    for (let x = 0; x < BODY[y].length; x++) {
      if (!BODY[y][x]) continue;
      const edges = [BODY[y - 1]?.[x], BODY[y + 1]?.[x], BODY[y]?.[x - 1], BODY[y]?.[x + 1]];
      if (edges.some((v) => !v)) px(ctx, ox + x, oy + y, '#7a3e33');
      px(ctx, ox + x, oy + y, '#cf6a4f');
    }
  }

  if (wave > 0.45) {
    px(ctx, ox + 13, oy + 1, '#cf6a4f');
    px(ctx, ox + 14, oy + 0, '#cf6a4f');
    px(ctx, ox + 15, oy + 1, '#cf6a4f');
  }

  drawFace(ctx, ox, oy, mood);
}

function chip(ctx: CanvasRenderingContext2D, x: number, y: number, text: string, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 56, 16);
  ctx.fillStyle = '#08131d';
  ctx.font = 'bold 9px monospace';
  ctx.fillText(text, x + 6, y + 11);
}

export function PetLabPanel() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    let raf = 0;

    const render = () => {
      frame += 1;
      const total = SCENE_DURATION * 4;
      const loop = frame % total;
      const scene = Math.floor(loop / SCENE_DURATION);
      const local = loop % SCENE_DURATION;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0e1b27';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = 'rgba(0,255,65,0.12)';
      for (let gx = 0; gx < canvas.width; gx += 24) {
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, canvas.height);
        ctx.stroke();
      }

      if (scene === 0) {
        const x = 6.8 + Math.sin(local * 0.01) * 0.7;
        const y = 8 + Math.sin(local * 0.02) * 0.35;
        const mood: Mood = local % 160 > 142 ? 'blink' : 'neutral';
        drawCrab(ctx, x, y, mood, Math.sin(local * 0.06));
        bubble(ctx, ["Hi, I'm Yin's crab.", 'I will guide this homepage for you.'], 10, 10);
      }

      if (scene === 1) {
        const x = 5.8 + (Math.sin(local * 0.012) + 1) * 1.35; // horizontal walk
        const y = 8.2 + Math.abs(Math.sin(local * 0.028)) * 0.65;
        drawCrab(ctx, x, y, 'focus', Math.sin(local * 0.08));
        chip(ctx, 188, 52, 'PROJECTS', '#9efad1');
        chip(ctx, 188, 72, 'BLOG', '#88e3ff');
        bubble(ctx, ['Explore projects, read blogs,', 'and jump to contact in one flow.'], 8, 10);
      }

      if (scene === 2) {
        const x = 6.6 + Math.sin(local * 0.01) * 0.8;
        const y = 9.2 - Math.abs(Math.sin(local * 0.028)) * 1.9; // jump
        drawCrab(ctx, x, y, 'excited');
        chip(ctx, 188, 46, 'CV', '#ffd36d');
        chip(ctx, 188, 66, 'MM', '#9efad1');
        chip(ctx, 188, 86, 'SYSTEM', '#f2b6d0');
        if (local % 120 < 48) {
          heart(ctx, x + 2, y - 3); // keep near crab, avoid overlays
        }
        bubble(ctx, ['This lab blends vision, multimodal AI,', 'and system building into one story.'], 6, 10);
      }

      if (scene === 3) {
        const x = 6 + (Math.sin(local * 0.02) + 1) * 1.1; // playful side move
        const y = 8.4 + Math.sin(local * 0.018) * 0.35;
        const mood: Mood = local % 180 > 160 ? 'blink' : 'neutral';
        drawCrab(ctx, x, y, mood, Math.sin(local * 0.05));
        chip(ctx, 188, 60, 'DRAG ORB', '#b0f2ff');
        bubble(ctx, ['Drag the crystal orb for scene tours,', 'then let ideas keep moving.'], 7, 10);
      }

      raf = window.requestAnimationFrame(render);
    };

    raf = window.requestAnimationFrame(render);
    return () => window.cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="petlab-panel" aria-hidden>
      <canvas ref={ref} width={W * PX} height={H * PX} className="petlab-canvas" />
    </div>
  );
}
