import Form from "@/app/components/form";
import { getProductById } from "@/app/utils/api";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const Page = async ({ params }: Props) => {
  const { slug } = await params;

  // eğer parametre new ise ekleme modunda eğer new değilse düzenleme modunda çalış
  const isAdd = slug === "new";

  // düzenleme modundaysak urlde id'si bulunan elemanın verilerini al
  let editItem;
  if (!isAdd) {
    editItem = await getProductById(slug);
  }

  console.log(editItem);

  return (
    <div>
      <h1>{isAdd ? "Yeni Ürün Ekle" : "Ürünü Düzenle"}</h1>

      <Form editItem={editItem} />
    </div>
  );
};

export default Page;
