import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"
import Head from "next/head"

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "The Parent Company",
  description: "Perfume is the art that makes memory speak",
  verification: {
    google: "GlJnf6soxXn41IE-YlKbusIKoeX_pS8jGoYA2REvs-M",
  },
  other: {
    "google-site-verification": "GlJnf6soxXn41IE-YlKbusIKoeX_pS8jGoYA2REvs-M",
  },
}

const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList()

    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id], limit: 4 },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          )
        }

        if (!collection) {
          return
        }

        collection.products = response.products as unknown as Product[]
      })
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  }
)

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  // console.log("region", region)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="GlJnf6soxXn41IE-YlKbusIKoeX_pS8jGoYA2REvs-M"
        />
      </Head>
      <Hero />

      {/* Collections */}
      <div className="pt-12 content-container">
        <h3 className="text-[24px] font-semibold">Collections</h3>
        <p className="text-[16px] text-neutral-400 italic">
          Perfume is the art that makes memory speak.
        </p>
      </div>

      <div className="py-4">
        <ul className="flex flex-col gap-x-4">
          <FeaturedProducts
            collections={collections.reverse()}
            region={region}
          />
        </ul>
      </div>
    </>
  )
}
