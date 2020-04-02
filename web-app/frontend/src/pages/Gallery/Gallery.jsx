import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Gallery from "react-photo-gallery";
import { SEO, Layout, Title } from "../../helpers/components";

const query = graphql`
    query {
        allGalleryJson {
            nodes {
                src {
                    childImageSharp {
                        fixed {
                            ...GatsbyImageSharpFixed_withWebp
                        }
                    }
                }
            }
        }
    }
`;

const Gallery2 = () => (
    <StaticQuery
        query={query}
        render={({ allGalleryJson: { nodes } }) => {
            const pictures = [];
            for (const i in nodes) {
                const { src } = nodes[i].src.childImageSharp.fixed;
                let width = Number(i) + 3;
                let height = Number(i) + 4;
                if (Number(i) === 0) {
                    width = 5;
                    height = 4;
                }
                pictures.push({ src, width, height });
            }
            return (
                <Layout>
                    <SEO title='Gallery' />
                    <div
                        className='center-horizontal'
                        style={{ marginTop: "20px", marginBottom: "18%" }}
                    >
                        <Title
                            variant='h5'
                            gutterBottom
                            className='title'
                            style={{ color: "#FFFFFF" }}
                        >
                            Gallery
                        </Title>
                        <Gallery photos={pictures} />
                    </div>
                </Layout>
            );
        }}
    />
);

export default Gallery2;
