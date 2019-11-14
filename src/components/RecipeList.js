import React, { Component } from 'react';
import Recipe from "./Recipe";

export default class RecipeList extends Component {

    render() {
        return (
            <div>
                <h4>hello from recipe list</h4>
                <Recipe />
            </div>
        )
    }
}
