export class Recipe {
    name: string;
    ingredients: string;
    description: string;
    created_at: Date;
    updated_at: Date;

    constructor(values: Object = {}) {
        this.name = '';
        this.ingredients = '';
        this.description = '';
        this.created_at = new Date;
        this.updated_at = new Date;
        Object.assign(this, values);
    }
}



