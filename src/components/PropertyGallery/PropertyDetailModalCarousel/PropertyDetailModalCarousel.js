import {Gallery, Item} from "react-photoswipe-gallery";
import React, {forwardRef, useRef, useImperativeHandle} from 'react'


const items = [{
    original: `https://placekitten.com/1024/768?image=0`,
    width: 1024,
    height: 768,
},
    {
        original: `https://placekitten.com/1024/768?image=1`,
        width: 1024,
        height: 768,
    }];


const PropertyDetailModalCarousel = forwardRef((props, ref) => {


    const carouselElements = [];

    // The component instance will be extended
    // with whatever you return from the callback passed
    // as the second argument
    useImperativeHandle(ref, () => ({

        getAlert(index) {
            const carouselElement = carouselElements.find(carouselElement => carouselElement.original === `https://placekitten.com/1024/768?image=1`);
            carouselElement.element.props.children.props.onClick();
        }
    }));

    return (
        <Gallery options={{ getThumbBoundsFn: undefined, showHideOpacity: true }}>
            <ul>
                {items.map((props) => (
                    <Item {...props} key={props.original}>
                        {({ ref, open }) => {

                            const carouselElement = (
                                <li ref={ref}>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            if(e) e.preventDefault()

                                            open()
                                        }}
                                    >

                                    </a>
                                </li>
                            )

                            if(!carouselElements.find(carouselElement=> carouselElement.original === props.original)){
                                carouselElements.push({
                                    original: props.original,
                                    element: carouselElement
                                });
                            }


                            return carouselElement;
                        }}
                    </Item>
                ))}
            </ul>
        </Gallery>
    )
});
export default PropertyDetailModalCarousel;
