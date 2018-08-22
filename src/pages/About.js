import React, {Component} from "react";
import Cardv2 from "../components/Cardv2"
import Grid from '@material-ui/core/Grid';
import Button from "../components/Button";
import GPK from "../data.json";

class About extends Component {

    state = {
        GPK,
    }
    
    onClick = (id) => {
        console.log(id)
    }

        render() {
            return (
                <div>
                    <Grid container spacing={24} style={{padding: 24}}>
                        <Grid item xs={12} sm={6}>
                                <Button/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={24} style={{padding: 24}}>
                        {this.state.GPK.map(gpk => (
                            <Grid item xs={12} sm={6} lg={4} xl={3}>
                                <Cardv2
                                    key={gpk.id}
                                    image={gpk.image}
                                    onClick={()=>{this.onClick(gpk.id)}}
                                />
                            </Grid>
                        ))}
                        
                        
                    </Grid>
                </div>
            )
        }

};

export default About;