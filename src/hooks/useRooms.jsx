import { graphql, useStaticQuery } from 'gatsby'

const useRooms = () => {

    const queryRooms = useStaticQuery( graphql`
        query{
            allDatoCmsRoom{
                nodes{
                    title
                    id
                    content
                    slug
                    image{
                        fluid(maxWidth:1200){
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `)
    return queryRooms.allDatoCmsRoom.nodes.map(room=>({
        title: room.title,
        id: room.id,
        content: room.content,
        slug: room.slug,
        image: room.image.fluid

    }))
}

export default useRooms
