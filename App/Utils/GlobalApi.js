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

const createBooking=async(data)=>{
  const mutationQuery=gql`
  mutation createBooking {
    createBooking(
      data: {
        bookingStatus: Booked,
         buisnessList: {
          connect: {id: "`+data.buisnessId+`"}},
          date: "`+data.date+`",
          time: "`+data.time+`",
          userEmail: "`+data.userEmail+`",
          userName: "`+data.userName+`"}
    ) {
      id
    }
    publishManyBookings(to: PUBLISHED) {
      count
    }
  }
  `
  const result= await request(MASTER_URL, mutationQuery);
    return result;
}
  



export default{
    getSlider,
    getCategories,
    getBuisnessList,
    getBuisnessListByCategory,
    createBooking

};