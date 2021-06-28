import { Button, Grid, TextField, Toolbar, Typography } from "@material-ui/core";
import { FC, memo } from "react";

const Signup: FC<any> = () => {

    return (
        <Grid container >
            <Toolbar>
                <form>
                    <TextField label="Name" />
                    <TextField label="Name" />
                    <TextField label="Name" />
                    <Button>Submit</Button>
                </form>
            </Toolbar>
        </Grid>
    )
}

export default memo(Signup)