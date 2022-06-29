import React from "react";

import Table from "klayar/components/Table";
import { Dropdown, DropdownItem } from "klayar/components/Dropdown";
import Icon from "klayar/components/Icons";

import { createBC } from "@helpers/common";

const users = [
  {
    id: 1,
    age: 40,
    firstName: "Dickerson",
    middleName: "Dickerson",
    lastName: "Macdonald",
    field1: "Field",
    field2: "Field",
    field3: "Field",
    field4: "Field",
    field5: "Field",
  },
  {
    id: 2,
    age: 21,
    firstName: "Larsen",
    middleName: "Dickerson",
    lastName: "Shaw",
    field1: "Field",
    field2: "Field",
    field3: "Field",
    field4: "Field",
    field5: "Field",
    field6: "Field",
  },
];

const columnUser = [
  {
    key: "id",
    label: "No",
    width: "2%",
    thClass: "text-right",
    tdClass: "text-right",
    format: (value, data, index) => `#${data.id}`,
  },
  { key: "firstName", label: "Firstname" },
  { key: "middleName", label: "Middlename" },
  { key: "lastName", label: "Lastname" },
  { key: "age", label: "Age", sort: (key) => alert(key) },
  { key: "field1", label: "Field" },
  { key: "field2", label: "Field" },
  { key: "field3", label: "Field" },
  { key: "field4", label: "Field" },
  { key: "field5", label: "Field" },
  { key: "field6", label: "Field" },
  {
    key: "id",
    label: "Action",
    thClass: "text-right",
    tdClass: "text-right",
    format: (value, data, index) => (
      <Dropdown
        title={<Icon name="MoreVertical" />}
        theme="normal"
        size="no-padding"
      >
        <DropdownItem href={`edit/${data.id}`}> Edit </DropdownItem>
        <DropdownItem onClick={() => console.log(`Delete ${data.id}`)}>
          Delete
        </DropdownItem>
      </Dropdown>
    ),
  },
];

const Page = () => {
  return <Table columns={columnUser} datas={users} theme="striped" />;
};

const bcData = [
  {
    url: "/",
    title: "Components",
  },
  "Table",
];
const bc = createBC(bcData);
Page.breadcrumb = bc;

export default Page;
