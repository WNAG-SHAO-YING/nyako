export const dynamic = "force-static";

import Catselect from "@/components/catselect";

import { CatDataProvider } from "@/components/cat-data";

import { getCat } from "@/lib/cat_status";

async function fetchCats() {
  const rows = await getCat();

  return rows;
}

function transform(rows) {
  const acc = {};
  for (const cur of rows) {
    const key = cur.uid;
    if (!key) continue;

    const { ability, ability_url, color, color_url, ...base } = cur; // 把 1:N 欄位排除，其餘淺拷貝
    if (!acc[key])
      acc[key] = {
        ...base,
        abilities: [],
        abilities_url: [],
        colors: [],
        colors_url: [],
      };

    const ab = ability;
    if (ab && !acc[key].abilities.includes(ab)) acc[key].abilities.push(ab);
    const url = ability_url;
    if (url && !acc[key].abilities_url.includes(url))
      acc[key].abilities_url.push(url);
    const colors = color;
    if (colors && !acc[key].colors.includes(color)) acc[key].colors.push(color);
    const colors_url = color_url;
    if (colors_url && !acc[key].colors_url.includes(color_url))
      acc[key].colors_url.push(color_url);
  }
  return Object.values(acc);
}
export default async function CatLayout({ children }) {
  const rows = await fetchCats();
  const oklist = transform(rows);
  return (
    <CatDataProvider initialData={oklist}>
      <Catselect data={oklist}>{children}</Catselect>
    </CatDataProvider>
  );
}
