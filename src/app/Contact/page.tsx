import React from 'react'

const page = () => {
  return (
    <div><figure className="bg-green-300 rounded-xl p-8 md:p-0 dark:bg-red-300">
    <img className="w-100 h-100 md:w-48 md:h-auto md:rounded full rounded-full mx-auto" src="/contact.png" alt="" width="384" height="412"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “My Name Is Umar Khalid.And I am a student of ICS.I am living in Rahim Yar Khan. If you want contact me you should come Rahim yar khan.If you want  to get any help from me. I will be there to help you.So if you want meet me then take train and come to Rahim yar khan.This is my contact.I am a student of Generrative AI.And my teacher is Mian Asif.He is a very good teacher.I am very happy to have a such kind teacher.So if you want to become a student of Mian Asif contact with me.I will be thankful to you If you come. ”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          UMAR KHALID
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Gulshan Iqbal ,Rahim Yar Khan
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page
