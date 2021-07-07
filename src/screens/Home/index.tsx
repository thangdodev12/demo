/* eslint-disable no-plusplus */
import { ReactNode, useState, useCallback } from "react";
import { Layout } from "@components";
import { updateInfoData, useGetInfo } from "./getInfoHook";
import {
  Body,
  Count,
  Button,
  Pagination,
  Table,
  Thead,
  TBody,
  Input,
} from "./styles";

const Home = (): ReactNode => {
  const [addNew, setAddNew] = useState(false);
  const [count, setCount] = useState(0);
  const [size] = useState(5);
  const [page, setPage] = useState(0);
  const [info, getInfo] = useGetInfo();
  const totalPage = Math.round(info.total / size);
  const getInfoFunc = (p: number) => {
    setPage(p);
    getInfo(p, 5);
  };
  const renderPagination = useCallback(() => {
    const pagi = [];
    for (let i = 0; i < totalPage; i++) {
      if (totalPage < 5 || (i >= page - 1 && i <= page + 3)) {
        pagi.push(
          <Button type="button" onClick={() => getInfoFunc(i)}>
            {i + 1}
          </Button>
        );
      }
    }
    return pagi;
  }, [info, page]);
  const onsubmit = useCallback(async (e) => {
    e.preventDefault();
    const form = {
      name: e.target.name.value,
      email: e.target.email.value,
      position: e.target.position.value,
    };
    const result = await updateInfoData(form);
    if (result.success) {
      getInfo(0);
    }
  }, []);
  return (
    <Layout>
      <Body>
        <Count>
          <p>{count}</p>
          <div className="count__action">
            <Button type="button" onClick={() => setCount(count + 1)}>
              Increase
            </Button>
            <Button type="button" onClick={() => setCount(0)}>
              Reset
            </Button>
          </div>
        </Count>
        <div>
          <Pagination>
            {page > 1 && (
              <Button type="button" onClick={() => getInfoFunc(0)}>
                &#60;&#60;
              </Button>
            )}
            {renderPagination().map((item) => item)}
            {page < totalPage - 4 && (
              <Button type="button" onClick={() => getInfoFunc(totalPage - 1)}>
                &#62;&#62;
              </Button>
            )}
          </Pagination>
          <Table>
            <Thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Position</th>
              </tr>
            </Thead>
            <TBody key={info.info ? info.info[0].name : ""}>
              {(info.info || []).map((item) => (
                <tr key={item.email}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.position}</td>
                </tr>
              ))}
            </TBody>
          </Table>
          <div>
            {addNew ? (
              <form onSubmit={onsubmit}>
                <Input type="text" name="name" id="name" placeholder="Name" />
                <Input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <Input
                  type="text"
                  name="position"
                  id="position"
                  placeholder="Position"
                />
                <Button type="submit">Save</Button>
              </form>
            ) : (
              <Button type="button" onClick={() => setAddNew(true)}>
                + New item
              </Button>
            )}
          </div>
        </div>
      </Body>
    </Layout>
  );
};

export default Home;
