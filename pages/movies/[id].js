import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Seo from '../../components/Seo';

const Detail = ({ results }) => {
  return (
    <div>
      <Seo title={results.original_title} />
      <h4>{results.original_title || 'Loading..'}</h4>
    </div>
  );
};

export default Detail;

export const getServerSideProps = async (context) => {
  const { data } = await axios.get(
    `http://localhost:3000/api/movies/${context.query.id}`
  );

  return {
    props: {
      results: data,
    },
  };
};
