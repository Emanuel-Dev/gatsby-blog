import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <h1>ERRO 404</h1>
    <h2>Página não encontrada!</h2>
    <Link to="/">Ir para a Home Page</Link>
  </>
)

export default NotFoundPage
