interface getServerSideProps {
  req: {
    headers: {
      cookie: string;
    };
  };
}

export const getServerSideProps = ({ req }: getServerSideProps) => {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
};
