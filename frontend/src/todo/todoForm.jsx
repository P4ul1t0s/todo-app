import React from "react";
import Grid from "../template/grid.jsx";
import IconButton from "../template/IconButton.jsx";

export default props => (
    <div role='form' className="todoForm">
        <Grid cols="12 9 10">
            <input id="description" className="form-control" placeholder="Adicione uma tarefa"/>
        </Grid>
        <Grid cols="12 3 2">
            <IconButton style="primary" icon="plus"/>
        </Grid>
    </div>
)