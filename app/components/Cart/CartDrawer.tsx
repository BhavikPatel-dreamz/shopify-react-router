import { useCart } from "~/lib/useCart";


export default function CartDrawer({
  onClose,
}: any) {
  const items = useCart((s) => s.items);

  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      />

      {/* DRAWER */}
      <div className="fixed right-0 top-0 h-full w-[380px] bg-white z-50 shadow-xl flex flex-col">

        {/* HEADER */}
        <div className="p-4 border-b flex justify-between">
          <h2 className="font-medium">
            BAG ({items.length})
          </h2>

          <button onClick={onClose}>
            ✕
          </button>
        </div>

        {/* ITEMS */}
        <div className="flex-1 overflow-auto p-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex gap-3 mb-4"
            >
              <img
                src={item.image}
                className="w-16 h-20 object-cover"
              />

              <div>
                <p className="text-sm font-medium">
                  {item.title}
                </p>

                <p className="text-xs opacity-70">
                  SIZE: {item.size}
                </p>

                <p className="text-sm">
                  ₹{item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CHECKOUT */}
        <div className="p-4 border-t">
          <button className="w-full bg-black text-white py-3">
            CHECKOUT
          </button>
        </div>
      </div>
    </>
  );
}