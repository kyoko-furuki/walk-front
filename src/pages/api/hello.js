// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function sotani() {
  const handleDistanceChange = (distance) => {
    // handleDistanceChange関数の実装
    console.log("歩数が変更されました:", distance);
    // ここには実際の処理を記述します
  };

  const fetchData = async () => {
    try {
      const response = await fetch("外部データのURL");
      const data = await response.json(); // JSON形式のデータを取得
      // 取得したデータを元にhandleDistanceChange関数を呼び出す
      handleDistanceChange(data.distance); // データから歩数を取り出して渡す
    } catch (error) {
      console.error("データの取得に失敗しました", error);
    }
  };
}
