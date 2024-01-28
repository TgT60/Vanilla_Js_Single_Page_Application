import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1> Welcome back, dom</h1>
            <p>
                Here info about My First Single Page Application
            </p>
            <p>
                <a href="/posts" data-link> View recent posts</a>
            </p>
        `;
    }
}