import { Region } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"
import { ProductCollectionWithPreviews } from "types/global"

export default function ProductRail({
  collection,
  region,
}: {
  collection: ProductCollectionWithPreviews
  region: Region
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <div className="content-container py-8 small:py-16">
      <div className="flex justify-between mb-8">
        <Text className="txt-xlarge font-semibold">{collection.title}</Text>
        <InteractiveLink href={`/collections/${collection.handle}`}>
          View all
        </InteractiveLink>
      </div>
      <ul className="flex items-center medium:grid medium:grid-cols-4 gap-x-6 gap-y-24 overflow-x-scroll no-scrollbar">
        {products &&
          products.map((product) => (
            <>
              <li key={product.id} className="flex-1">
                <ProductPreview
                  productPreview={product}
                  region={region}
                  isFeatured
                />
              </li>
              <li key={product.id} className="flex-1">
                <ProductPreview
                  productPreview={product}
                  region={region}
                  isFeatured
                />
              </li>
              <li key={product.id} className="flex-1">
                <ProductPreview
                  productPreview={product}
                  region={region}
                  isFeatured
                />
              </li>
              <li key={product.id} className="flex-1">
                <ProductPreview
                  productPreview={product}
                  region={region}
                  isFeatured
                />
              </li>
            </>
          ))}
      </ul>
    </div>
  )
}
