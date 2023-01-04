import React from "react";

import {Button, Card, CardContent, Grid, TextField, Typography,} from "@mui/material";

const LogIn = () => {
    return (
        <div className="Form">
            <img
                className="logo"
                src="http://trombino.dmax.global/images/logo.jpg"
                alt="Logo dmax"
            />
            <Grid>
                <Card style={{maxWidth: 450, padding: "20px 5px", margin: "0 auto"}}>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Mise à jour
                        </Typography>

                        <form>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <TextField
                                        placeholder="Entrez le nom"
                                        label="Nom"
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        placeholder="Entrez le prénom "
                                        label="Prénom"
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                    >
                                        Mettre à jour
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
};
export default LogIn;
