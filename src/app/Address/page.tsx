import React from 'react'

const page = () => {
  return (
    <div><figure className="bg-blue-300 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-100 h-100 md:w-48 md:h-auto md:rounded full rounded-full mx-auto" src="/house.png" alt="" width="384" height="412"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “I live in Gulshan Iqbal.
I live in my ancestral home with my grandparents, parents, and siblings. My grandfather built this house with his hard work. It has four rooms, one kitchen, two bathrooms, and a patio. My house is at least fifty years old.

I admire the beauty of my house. The vintage vibes make it even more beautiful. My grandparents have a small garden in the patio which adds greenery to my house. Moreover, it also has two trees. One is a pomegranate tree and the other is a Henna tree. They provide us with shade and sweet fruits.

My house has very high ceilings as it was made many years back. It has vintage switchboards which give it a very unique look. My house is situated in the middle of four roads. It is not joined to any other house. My house has four entrances from each side.

Whenever my friends come over to my house, they click a lot of pictures. Even my relatives love the interior of the house which is a mix of modern and vintage architecture. My house is colored in brown and beige color and it stands out in our locality.I love my house very much.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          UMAR KHALID
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          A Citizen of Rahim Yar Khan
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page
