exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  const result = await graphql(`
  query{
      allDatoCmsRoom{
  	    nodes{
			    slug
    	  }
      }
    } 
  `)


  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  //If there are no errors, create pages for each room
  result.data.allDatoCmsRoom.nodes.forEach(room => {
    createPage({
      path: room.slug,
      component: require.resolve("./src/components/room.js"),
      context: {
        slug: room.slug,
      },
    })
  })
}
