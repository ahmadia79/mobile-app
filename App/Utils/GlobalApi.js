import { request, gql } from 'graphql-request'

const MASTER_URL="https://api-eu-west-2.hygraph.com/v2/cluwwctp801e407wb1blswkq8/master"

const getSlider=async()=>{
    const query = gql`
    query GetSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
    
 `
 const result= await request(MASTER_URL, query);
 return result;

}

const getCategories=async()=>{
    const query=gql`
    query GetCategory {
        categories {
          id
          name
          icon {
            url
          }
        }
      }
      `
      const result= await request(MASTER_URL, query);
      return result;


}

const getBuisnessList=async()=>{
  const query=gql`
  query GeBuisnessList {
    buisnessLists {
      id
      name
      email
      contactPerson
      category {
        name
      }
      address
      about
      images {
        url
      }
    }
  }
  `
    const result= await request(MASTER_URL, query);
    return result;

}

const getBuisnessListByCategory=async(category)=>{
  const query=gql`
  query GetBuisnessList {
    buisnessLists(where: {category: {name: "`+category+`"}}) {
      id
      name
      email
      contactPerson
      category {
        name
      }
      address
      about
      images {
        url
      }
    }
  }
  `
  const result= await request(MASTER_URL, query);
    return result;

}
  



export default{
    getSlider,
    getCategories,
    getBuisnessList,
    getBuisnessListByCategory

};