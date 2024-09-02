import React from 'react'

const page = () => {
  return (
    <div><figure className="bg-red-200 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-100 h-100 md:w-48 md:h-auto md:rounded full rounded-full mx-auto" src="/Screenshot (2).png" alt="" width="384" height="412"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “My Name Is Choudary Umar Khalid.This is my project generative AI.And I have done it.This project is given to me by my teacher MIAN ASIF who thought me very well so I became able to make this project.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          CHOUDARY UMAR KHALID
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Generative AI student , Rahim Yar Khan
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page
