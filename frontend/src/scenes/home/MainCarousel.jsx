import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Img2 from "../../assets/pic1.jpg"
import Img3 from "../../assets/pic2.jpg"
import Img4 from "../../assets/pic3.jpg"
import Img5 from "../../assets/pic4.jpg"
import Img6 from "../../assets/pic5.jpg"
import Img1 from "../../assets/pic6.jpg"
import Img7 from "../../assets/pic7.jpg"
// import Img8 from "../../assets/pic8.jpg"




const MainCarousel = () => {

    const photos = [
        {
            src: Img1
        },
        {
            src: Img2
        },
        {
            src: Img3
        },
        {
            src: Img4
        },
        {
            src: Img5
        },
        {
            src: Img6
        },
        {
            src: Img7
        },
        // {
        //     src: Img8
        // },
    ];

    const isNonMobile = useMediaQuery("(min-width:600px)");

    return (
        <Carousel
            autoPlay={true}
            autoFocus={true}
            infiniteLoop={true}
            showThumbs={false}
            showIndicators={false}
            showStatus={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) => (
                <IconButton
                    onClick={onClickHandler}
                    sx={{
                        backgroundColor: "chocolate",
                        position: "absolute",
                        top: "45%",
                        left: "7px",
                        color: "beige",
                        "&:hover": { color: "chocolate", backgroundColor: "beige" },
                        padding: "3px",
                        zIndex: "10",
                    }}
                >
                    <NavigateBeforeIcon sx={{ fontSize: 36 }} />
                </IconButton>
            )}
            renderArrowNext={(onClickHandler, hasNext, label) => (
                <IconButton
                    onClick={onClickHandler}
                    sx={{
                        backgroundColor: "chocolate",
                        position: "absolute",
                        top: "45%",
                        right: "7px",
                        color: "beige",
                        "&:hover": { color: "chocolate", backgroundColor: "beige" },
                        padding: "3px",
                        zIndex: "10",
                    }}
                >
                    <NavigateNextIcon sx={{ fontSize: 36 }} />
                </IconButton>
            )}
        >
            {
                photos.map((photo, index) => (
                    <Box key={`carousel-image-${index}`}>
                        <img
                            src={photo.src}
                            alt={`carousel-${index}`}
                            style={{
                                width: "100%",
                                height: "750px",
                                objectFit: "cover",
                                backgroundAttachment: "fixed",
                            }}
                        />
                        <Box
                            color="white"
                            padding={isNonMobile ? "20px" : "10px 20px"}
                            borderRadius="3px"
                            textAlign="left"
                            backgroundColor="rgb(0, 0, 0, 0.4)"
                            position="absolute"
                            top={isNonMobile ? "35%" : "40%"}
                            left={isNonMobile ? "10%" : "0"}
                            right={isNonMobile ? undefined : "0"}
                            margin={isNonMobile ? undefined : "0 auto"}
                            maxWidth={isNonMobile ? undefined : "280px"}
                        >
                            <Typography lineHeight="1.3" variant={isNonMobile ? "h2" : "h3"}>Home for latest,  affordable <br></br> children clothings</Typography>
                            <Typography
                                fontWeight="bold"
                                marginTop="10px"
                                color="chocolate"
                                sx={{ textDecoration: "underline" }}
                            >
                                scroll down to discover more!
                            </Typography>
                        </Box>
                    </Box>
                ))}
        </Carousel>
    );
};

export default MainCarousel;