import { useLoaderData } from "react-router";
import LookSection from "~/components/shopTheLook/LookSection";
import { RARE_RABBIT_DENIM_PAGE_QUERY } from "~/graphQL/shopthelook.queries";
import { createStorefrontClient } from "~/server/storefront.server";

export async function loader() {
  const storefront = createStorefrontClient();

  const data = await storefront.query<{
    metaobjects: {
      nodes: any[];
    };
  }>(RARE_RABBIT_DENIM_PAGE_QUERY);

  return {
    looks: data.metaobjects.nodes,
  };
}

export default function DenimOnDenimPage() {
  const { looks } = useLoaderData<typeof loader>();

  return (
    <div className="shop-the-look-section">
      {looks.map((look, index) => (
        <LookSection
          key={look.id}
          look={look}
          sliderIndex={index}
        />
      ))}
    </div>
  );
}