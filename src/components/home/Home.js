import { useMemo, useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./Home.css";

const nyArea = [
  "首页",
  "法拉盛",
  "皇后区",
  "曼哈顿",
  "布碌仑",
  "新泽西",
  "长岛",
];

export default function Home() {
  const [selectedArea, setSelectArea] = useState("");

  return (
    <>
      <div className="areaSelection">
        <Stack direction="row" spacing={1}>
          {nyArea.map((item) => {
            return (
              <div className="areaButtons">
                <Button onClick={() => setSelectArea(item)}>{item}</Button>
              </div>
            );
          })}
        </Stack>
      </div>

      <div>简介。。。</div>
      <div>{selectedArea}</div>
    </>
  );
}
