import React from 'react';
import axios from "axios";
import 'antd/dist/antd.css';
import './index.css';
import {
  Button,
  Form,
  Radio,
  Select,
  Layout, 
  Menu
} from 'antd';
import { useState } from 'react';
// import axios from 'axios';
const App = () => {
  const [componentSize, setComponentSize] = useState('default');
  const [visible, setVisible] = useState(false);
  const [magadlal, setMagadlal] = useState(1);
  const [string, setString] = useState(1);

  let max=0; 
  let sainig;
  let dundig;
  let muug;
let surlaga
  const handleClick = (values) => {
        console.log(values)
    
    axios
    .post('http://localhost:3001/heh', {values}).then(response => {
    // if (response.data.sain > max){surlaga = "sain";max = response.data.sain}
    // if (response.data.dund > max){surlaga = "dund"; max = response.data.dund }
    // if (response.data.muu > max){surlaga = "muu"; max = response.data.muu}
    max=response.data.sain+response.data.dund+response.data.muu
    sainig=response.data.sain*100/max
    dundig=response.data.dund*100/max
    muug=response.data.muu*100/max
    setMagadlal(`685 - аас дээш оноо авах магадлал  : ${sainig} % 525- 677 оноо авах магадлал : ${dundig} %  525 -аас доош оноо авах магадлал ${muug} % байна`)
    console.log(response.data)
  console.log(max)  
  // setMagadlal(max)
setString(surlaga)})
  setVisible(true)  
}

  return (
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            initialValues={{
              size: componentSize,
            }}
            size={componentSize}
            onFinish={handleClick}
          >
      <p>Таны хүйс :</p>
      <Form.Item 
        label="" 
        name="huis"
        rules={[{ required: true, message: 'Please pick an item!' }]}>
      <Radio.Group>
            <Radio value="er">Эрэгтэй</Radio>
            <Radio value="em">Эмэгтэй</Radio>
          </Radio.Group>
      </Form.Item>
      <p>Та аль оны төгсөгч вэ ? </p>
      <Form.Item 
        label="" 
        name="on"
        rules={[{ required: true, message: 'Please pick an item!' }]}>
        <Radio.Group>
            <Radio value="tuhain">Энэ оны</Radio>
            <Radio value="omnoh">Өмнөх оны</Radio>
          </Radio.Group>
      </Form.Item>
      <p>Та мэргэжилээ сонгосон уу ?</p>
      <Form.Item 
        label="" 
        name="mergejil"
        rules={[{ required: true, message: 'Please pick an item!' }]}>
        <Radio.Group>
            <Radio value="TRUE">Тийм</Radio>
            <Radio value="FALSE">Үгүй</Radio>
          </Radio.Group>
      </Form.Item>
      <p>Танайх гэртээ номын сантай юу ?</p>
      <Form.Item 
        name="nom"
        rules={[{ required: true, message: 'Please pick an item!' }]}>
        <Radio.Group>
            <Radio value="TRUE">Тийм</Radio>
            <Radio value="FALSE">Үгүй</Radio>
          </Radio.Group>
      </Form.Item>
      <p>Танай гэрт хичнээн тооны ном байдаг вэ ?</p>
      <Form.Item 
        label="" 
        name="ntoo"
        rules={[
          {
            required: true,
            message: '',
          },
        ]}
        style={{width:"45%"}}
      >
      <Select>
          <Select.Option value="tsoon">Цөөн тооны</Select.Option>
          <Select.Option value="dund">20-100</Select.Option>
          <Select.Option value="olon">100-аас дээш</Select.Option>
        </Select>
      </Form.Item>
      <p>Та ЭЕШ-д ямар төрлийн материал ашиглан бэлдэж байгаа вэ ?</p>
      <Form.Item 
        label="" 
        name="enom"
        rules={[
          {
            required: true,
            message: '',
          },
        ]}
        style={{width:"45%"}}>
      <Select>
          <Select.Option value="nom">Сурах бичиг</Select.Option>
          <Select.Option value="dasgal">Дасгалын хураамж, гарын авлага</Select.Option>
          <Select.Option value="bugd">Дээрх бүгд</Select.Option>
        </Select>
      </Form.Item>
      <p>Та ЭЕШ-д хэрхэн бэлдэж байгаа вэ ?</p>
      <Form.Item 
        label="" 
        name="esurgalt"
        rules={[
          {
            required: true,
            message: '',
          },
        ]}
        style={{width:"45%"}}>
      <Select>
          <Select.Option value="surguuli">Сургуулиас хуваарийн дагуу зохион байгуулж буй нэмэлт давтлага</Select.Option>
          <Select.Option value="surgalt">Сургалтын төв</Select.Option>
          <Select.Option value="davtlaga">Ганцаарчилсан давтлага</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item style={{marginLeft:"11%"}}>
        <Button type="primary" htmlType="submit">SUBMIT</Button>
      </Form.Item>
      {visible?<p>{string} {magadlal}</p>:""}
    </Form>
  );
};

export default App;