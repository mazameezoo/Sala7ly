import { useState } from 'react';

export function useCameraPreview() {
  const [taken, setTaken] = useState(false);

  const takePhoto = () => setTaken(true);
  const retake = () => setTaken(false);

  return { taken, takePhoto, retake };
}
