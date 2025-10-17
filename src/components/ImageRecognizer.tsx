import { useEffect, useRef, useState } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs"; // registers backend

interface Props {
  onDetect: (labels: string[]) => void;
}

export function ImageRecognizer({ onDetect }: Props) {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState<mobilenet.MobileNet | null>(null);
  const [labels, setLabels] = useState<string[]>([]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      try {
        const m = await mobilenet.load({ version: 2, alpha: 1.0 });
        if (mounted) setModel(m);
      } finally {
        setLoading(false);
      }
    })();
    return () => { mounted = false };
  }, []);

  async function onFileChange() {
    const file = fileRef.current?.files?.[0];
    if (!file || !model) return;
    const url = URL.createObjectURL(file);
    if (!imgRef.current) return;
    imgRef.current.src = url;
    setLoading(true);
    try {
      await new Promise((res) => (imgRef.current!.onload = () => res(null)));
      const preds = await model.classify(imgRef.current!, 5);
      const foodLike = preds
        .map((p) => p.className)
        .flatMap((c) => c.split(", "))
        .map((s) => s.toLowerCase());
      const top = Array.from(new Set(foodLike)).slice(0, 5);
      setLabels(top);
      onDetect(top);
    } catch (e) {
      // swallow errors, UX keeps simple for demo
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="image-recognizer">
      <div className="row">
        <input ref={fileRef} type="file" accept="image/*" onChange={onFileChange} />
        {loading && <span>Loading…</span>}
      </div>
      <img ref={imgRef} alt="preview" style={{ display: "none" }} />
      {labels.length > 0 && (
        <div className="detected">
          <small>Detected: {labels.join(", ")}</small>
        </div>
      )}
    </div>
  );
}


