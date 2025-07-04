import {Card, CardMedia, CardHeader} from "@mui/material";

const SubjectCard = (props) => {

    return(
        <Card variant="elevation" elevation={3} sx={{width:'30%'}}>
            <CardMedia component="img" image="/antenna.png" sx={{width:'100%'}}></CardMedia>
            <CardHeader title="Propagation and Antenna" subheader="Prof. Dr. Ram Krishna Maharjan" ></CardHeader>
        </Card>
    )
}

export default SubjectCard;