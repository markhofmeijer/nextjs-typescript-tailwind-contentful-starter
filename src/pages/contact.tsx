import React, { useState } from "react"
import { GetStaticProps } from "next"
import { useRouter } from "next/router"

import { Layout } from "@/components/layouts"
import { ContentPage } from "@/components/templates"
import getPageBySlug from "@/utils/contentful/page/getPageBySlug"
import getSiteNavigationItems from "@/utils/contentful/siteNavigation/getSiteNavigationItems"
import getSiteMetadata from "@/utils/contentful/siteMetadata/getSiteMetadata"

import { IAppData, IAppDataProps } from "@/types/app"

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")

const ContactPage: React.FC<IAppDataProps> = ({ data }) => {
  const { metaData } = data

  const formNotificationSubject = "Contactformulier website"
  const [formState, setFormState] = useState({})

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }
  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const router = useRouter()
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.target
    const data = encode({
      "form-name": form.getAttribute("name"),
      subject: formNotificationSubject,
      ...formState,
    })
    console.log(data)

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data,
    })
      .then(() => router.push(form.getAttribute("action")))
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
        <p>
          Ook is het mogelijk om via onderstaand formulier contact met ons op te nemen. Wij streven
          er naar om uw bericht binnen 2 werkdagen te beantwoorden.
        </p>
        <p className="mt-4">Vul minimaal de verplichte velden (*) in en klik op verzenden.</p>
        <form
          className="mt-8 md:w-3/4 lg:w-2/3"
          name="contact"
          method="POST"
          action="/bedankt"
          data-netlify="true"
          netlify-honeypot="no-spam-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="subject" value={formNotificationSubject} />
          <div className="hidden">
            <label>
              Don’t fill this out if you are human: <input name="no-spam-field" />
            </label>
          </div>
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
