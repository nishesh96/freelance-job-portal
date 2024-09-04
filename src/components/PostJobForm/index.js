import {
  Button,
  Card,
  Form,
  Input,
  InputNumber,
  message,
  Select,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { SKILLSET } from "constants";
import { useDispatch } from "react-redux";
import { addNewJob } from "state/slices/employerSlice";
import { FILE_SIZE_LIMIT } from "utils";

const { TextArea } = Input;

const mockUpload = ({ file, onSuccess, onError }) => {
  setTimeout(() => {
    const meetsFileSize = file.size / 1024 < FILE_SIZE_LIMIT;
    if (meetsFileSize) {
      onSuccess("ok");
    } else {
      onError(new Error("File must be smaller than 16KB!"));
    }
  }, 1000);
};

const fileUploadProps = {
  name: "file",
  accept: ".doc,.docx,.pdf",
  headers: {
    authorization: "authorization-text",
  },
  beforeUpload: (file) => {
    const meetsFileSize = file.size / 1024 < FILE_SIZE_LIMIT;
    if (!meetsFileSize) {
      message.error("File must be smaller than 16KB");
    }
    return meetsFileSize || Upload.LIST_IGNORE;
  },
  customRequest: mockUpload,
  maxCount: "1",
  onChange(info) {
    if (info.file.status !== "uploading") {
      //console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  //console.log("normFile", e.file.status);
  return e?.fileList;
};

const PostJobForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const jobDetails = {
      id: Math.floor(Math.random() * 100),
      role: values.jobTitle,
      companyName: values.companyName,
      skillset: values.jobTags,
      minSalaryPerHour: values.salaryPerHour,
      timeStamp: Date.now(),
    };
    setTimeout(() => {
      form.resetFields();
      dispatch(addNewJob(jobDetails));
      message.success("Job Posted Successfully");
    }, 300);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = () => {
    return "";
  };

  return (
    <Card title="Post a Job">
      <Form
        name="post-job-form"
        form={form}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        labelAlign="left"
        style={{
          marginTop: "20px",
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Job Title"
          name="jobTitle"
          rules={[
            {
              required: true,
              message: "Please input value",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Job Requirements"
          name="jobRequirements"
          rules={[
            {
              required: true,
              message: "Please input value",
            },
          ]}
        >
          <TextArea />
        </Form.Item>
        <Form.Item
          label="Company Name"
          name="companyName"
          rules={[
            {
              required: true,
              message: "Please input value",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Salary Per Hour($)"
          name="salaryPerHour"
          rules={[
            {
              required: true,
              message: "Please input value",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="jobDocument"
          label="Job Description Doc"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload {...fileUploadProps}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>{" "}
        </Form.Item>
        <Form.Item
          name="jobTags"
          label="Tags"
          rules={[
            {
              required: true,
              message: "Please input value",
            },
          ]}
        >
          <Select
            mode="tags"
            style={{
              width: "100%",
            }}
            placeholder="Select Tags / Add tags"
            onChange={handleChange}
            options={SKILLSET}
          />
        </Form.Item>
        <Form.Item
          label="Contact Name"
          name="contactName"
          rules={[
            {
              required: true,
              message: "Please input value",
            },
          ]}
        >
          <Input name="contactName" placeholder="John Doe" />
        </Form.Item>
        <Form.Item
          label="Contact Number"
          name="contactNumber"
          rules={[
            {
              required: true,
              message: "Please input value",
            },
          ]}
        >
          <Input placeholder="95233xxxxx" />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default PostJobForm;
