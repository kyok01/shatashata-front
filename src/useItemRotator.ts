import { useEffect, useState } from "react";

type useItemRotatorParams = {
  arr: (string | number)[];
  interval_ms: number;
}

export const useItemRotator = (params: useItemRotatorParams)=> {
  const {arr, interval_ms} = params;
    const [index, setIndex] = useState<number>(0); // 現在のインデックスをstateに保存
    const [intervalId, setIntervalId] = useState<number>(null); // インターバルIDをstateに保存
  
    useEffect(() => {
      const interval = setInterval(() => {
        // 5秒ごとにインデックスを更新
        setIndex((prevIndex) =>
          prevIndex === arr.length - 1 ? null : prevIndex + 1
        );
      }, interval_ms) as unknown as number; // 戻り値はnumber型
      setIntervalId(interval); // インターバルIDを保存
      return () => clearInterval(interval); // コンポーネントがアンマウントされたらタイマーをクリア
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    useEffect(() => {
      if (index === null) {
        // インデックスがnullになったら
        clearInterval(intervalId as number); // タイマーを停止
      }
    }, [index, intervalId]);

    return arr[index];
}