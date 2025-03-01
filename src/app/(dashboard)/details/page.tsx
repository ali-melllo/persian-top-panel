import { Card } from "@/components/Card";
import { DoorOpenIcon, GlassWater, HammerIcon, HomeIcon, LightbulbIcon, PaintbrushIcon, RulerIcon, TreesIcon } from "lucide-react";

export default function Example() {
 
  const mock = [
    { name: "Foundation & Groundwork", icon: RulerIcon },
    { name: "Flooring and Internal Design", icon: HammerIcon },
    { name: "Roofing & Insulation", icon: HomeIcon },
    { name: "Exterior Walls & Cladding", icon: PaintbrushIcon },
    { name: "Windows & Doors", icon: DoorOpenIcon },
    { name: "Electrical & Lighting", icon: LightbulbIcon },
    { name: "Plumbing & Drainage", icon: GlassWater },
    { name: "Landscaping & Outdoor", icon: TreesIcon },
  ];

  return (
    <>
      <h1 className="text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50">
        Service Types
      </h1>
      <div className="grid grid-cols-4 mt-4 sm:mt-6 lg:mt-10 gap-5">
        {mock.map((item) => (
          <Card key={item.name} className="rounded-2xl flex gap-5 font-bold text-2xl">
            <item.icon className="size-20"/>
            {item.name}
          </Card>
        ))}
      </div>
    </>
  )
}
