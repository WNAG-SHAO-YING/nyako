import Catselect from "@/components/catselect";

export default function CatLayout({ children }) {
  console.log("這是測試有沒有收到children", children);
  return (
    <>
      <Catselect />
    </>
  );
}
