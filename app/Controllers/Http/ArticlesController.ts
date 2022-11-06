// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Article from 'App/Models/Article'
export default class ArticlesController {
    public async index({ response }) {
        const articles = await Article.all()

        return response.ok(articles)
    }
}
