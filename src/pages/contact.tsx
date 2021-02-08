import React, { useState } from "react"
import { GetStaticProps } from "next"

import { Layout } from "@/components/layouts"
import { ContentPage } from "@/components/templates"
import getPageBySlug from "@/utils/contentful/page/getPageBySlug"
import getSiteNavigationItems from "@/utils/contentful/siteNavigation/getSiteNavigationItems"
import getSiteMetadata from "@/utils/contentful/siteMetadata/getSiteMetadata"

import { IAppData, IAppDataProps } from "@/types/app"

interface IFormData {
  _subject: string | null
  _language: string | null
  name: string | null
  email: string | null
  phone: string | null
  message: string | null
}

const encode = (data: IFormData) =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")

const ContactPage: React.FC<IAppDataProps> = ({ data }) => {
  const { metaData } = data

  const [formState, setFormState] = useState<IFormData>({
    _subject: "Contactformulier website",
    _language: "nl",
    name: null,
    email: null,
    phone: null,
    message: null,
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }
  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = encode({
      ...formState,
    })
    //  console.log(data)
    //  return

    fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL, {
      mode: "no-cors",
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data,
    })
      .then(() => setFormSubmitted(true))
      .catch(error => alert(error))
  }

  return (
    <Layout data={data}>
      <ContentPage data={data} />

      <div className="container pt-4 md:pt-8 pb-8">
        <h2 className="text-xl leading-loose font-bold">Contactgegevens</h2>
        <p className="mbt-4">
          {metaData.clientName}
          <br />
          {metaData.clientAddress}
          <br />
          {`${metaData.clientZipCode} ${metaData.clientCity}`}
          <br />
          {`T: ${metaData.clientPhone}`}
          <br />
          E: <a href={`mailto:${metaData.clientEmail}`}>{metaData.clientEmail}</a>
        </p>
        <h2 className="mt-8 text-xl leading-loose font-bold">Contactformulier</h2>
        {!formSubmitted ? (
          <>
            <p>
              Ook is het mogelijk om via onderstaand formulier contact met ons op te nemen. Wij
              streven er naar om uw bericht binnen 2 werkdagen te beantwoorden.
            </p>
            <p className="mt-4">Vul minimaal de verplichte velden (*) in en klik op verzenden.</p>
            <form
              className="mt-8 md:w-3/4 lg:w-2/3"
              name="contactformulier"
              method="POST"
              action="/bedankt"
              onSubmit={handleSubmit}
            >
              <input type="text" name="_gotcha" className="hidden" />

              <div className="flex flex-col md:flex-row">
                <label htmlFor="name" className="w-1/3 cursor-pointer">
                  Naam *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="flex-grow py-1 px-2 hover:bg-gray-100 border border-gray-300 shadow-inner rounded text-sm tracking-wide"
                  required
                  onChange={handleChangeInput}
                />
              </div>
              <div className="flex flex-col md:flex-row mt-4">
                <label htmlFor="email" className="w-1/3 cursor-pointer">
                  E-mail *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="flex-grow py-1 px-2 hover:bg-gray-100 border border-gray-300 shadow-inner rounded text-sm tracking-wide"
                  required
                  onChange={handleChangeInput}
                />
              </div>
              <div className="flex flex-col md:flex-row mt-4">
                <label htmlFor="phone" className="w-1/3 cursor-pointer">
                  Telefoon
                </label>
                <div className="flex-grow">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="block w-full py-1 px-2 hover:bg-gray-100 border border-gray-300 shadow-inner rounded text-sm tracking-wide"
                    pattern="(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)"
                    onChange={handleChangeInput}
                  />
                  <span className="text-xs italic">
                    Gebruik een Nederlands telefoonnummer, zonder spaties.
                  </span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row mt-4">
                <label htmlFor="message" className="w-1/3 cursor-pointer">
                  Bericht *
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="flex-grow resize-y py-1 px-2 hover:bg-gray-100 border border-gray-300 shadow-inner rounded text-sm tracking-wide"
                  rows={4}
                  required
                  onChange={handleChangeTextArea}
                ></textarea>
              </div>
              <div className="md:mt-4">
                <button
                  type="submit"
                  className="inline-block mt-8 px-4 py-2 rounded-md bg-primary-lighter hover:bg-primary tracking-wide text-white font-semibold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                >
                  Verzenden
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="mt-2 md:mb-4 bg-green-100 border border-green-200 p-4 rounded-lg text-gray-800">
            Wij hebben uw bericht goed ontvangen en streven er naar om deze binnen 2 werkdagen te
            beantwoorden.
          </div>
        )}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const page = await getPageBySlug("contact")
  const navItems = await getSiteNavigationItems()
  const metaData = await getSiteMetadata()

  const data: IAppData = {
    page,
    navItems,
    metaData,
  }

  return {
    props: {
      data,
    },
  }
}

export default ContactPage
