<template>
  <div class="container">
    <a-page-header style="border: 1px solid rgb(235, 237, 240)" title="Title" sub-title="This is a subtitle" @back="() => null" />
    <a-pagination :default-current="6" :total="500" />
    <div>
      <a-time-picker use12-hours @change="onChange" />
      <a-time-picker use12-hours format="h:mm:ss A" @change="onChange" />
      <a-time-picker use12-hours format="h:mm a" @change="onChange" />
    </div>
    <div>
      <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item label="Fail" validate-status="error" help="Should be combination of numbers & alphabets">
          <a-input id="error" placeholder="unavailable choice" />
        </a-form-item>
        <a-form-item label="Warning" validate-status="warning">
          <a-input id="warning" placeholder="Warning" />
        </a-form-item>
        <a-form-item label="Validating" has-feedback validate-status="validating" help="The information is being validated...">
          <a-input id="validating" placeholder="I'm the content is being validated" />
        </a-form-item>
        <a-form-item label="Success" has-feedback validate-status="success">
          <a-input id="success" placeholder="I'm the content" />
        </a-form-item>
        <a-form-item label="Warning" has-feedback validate-status="warning">
          <a-input id="warning2" placeholder="Warning" />
        </a-form-item>
        <a-form-item label="Fail" has-feedback validate-status="error" help="Should be combination of numbers & alphabets">
          <a-input id="error2" placeholder="unavailable choice" />
        </a-form-item>
        <a-form-item label="Success" has-feedback validate-status="success">
          <a-date-picker style="width: 100%" />
        </a-form-item>
        <a-form-item label="Warning" has-feedback validate-status="warning">
          <a-time-picker style="width: 100%" />
        </a-form-item>
        <a-form-item label="Error" has-feedback validate-status="error">
          <a-select default-value="1">
            <a-select-option value="1">
              Option 1
            </a-select-option>
            <a-select-option value="2">
              Option 2
            </a-select-option>
            <a-select-option value="3">
              Option 3
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="Validating" has-feedback validate-status="validating" help="The information is being validated...">
          <a-cascader :default-value="['1']" :options="options" @change="onChange2" />
        </a-form-item>
        <a-form-item label="inline" style="margin-bottom:0;">
          <a-form-item validate-status="error" help="Please select the correct date" :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
            <a-date-picker style="width: 100%" />
          </a-form-item>
          <span :style="{ display: 'inline-block', width: '24px', textAlign: 'center' }">
            -
          </span>
          <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
            <a-date-picker style="width: 100%" />
          </a-form-item>
        </a-form-item>
        <a-form-item label="Success" has-feedback validate-status="success">
          <a-input-number style="width: 100%" />
        </a-form-item>
        <a-form-item label="Success" has-feedback validate-status="success">
          <a-input allow-clear placeholder="with allowClear" />
        </a-form-item>

        <a-form-item label="Warning" has-feedback validate-status="warning">
          <a-input-password placeholder="with input password" />
        </a-form-item>

        <a-form-item label="Error" has-feedback validate-status="error">
          <a-input-password allow-clear placeholder="with input password and allowClear" />
        </a-form-item>
      </a-form>
    </div>

    <div>
      <a-form-model ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol2" :wrapper-col="wrapperCol2">
        <a-form-model-item ref="name" label="Activity name" prop="name">
          <a-input
            v-model="form.name"
            @blur="
              () => {
                $refs.name.onFieldBlur()
              }
            "
          />
        </a-form-model-item>
        <a-form-model-item label="Activity zone" prop="region">
          <a-select v-model="form.region" placeholder="please select your zone">
            <a-select-option value="shanghai">
              Zone one
            </a-select-option>
            <a-select-option value="beijing">
              Zone two
            </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="Activity time" required prop="date1">
          <a-date-picker v-model="form.date1" show-time type="date" placeholder="Pick a date" style="width: 100%;" />
        </a-form-model-item>
        <a-form-model-item label="Instant delivery" prop="delivery">
          <a-switch v-model="form.delivery" />
        </a-form-model-item>
        <a-form-model-item label="Activity type" prop="type">
          <a-checkbox-group v-model="form.type">
            <a-checkbox value="1" name="type">
              Online
            </a-checkbox>
            <a-checkbox value="2" name="type">
              Promotion
            </a-checkbox>
            <a-checkbox value="3" name="type">
              Offline
            </a-checkbox>
          </a-checkbox-group>
        </a-form-model-item>
        <a-form-model-item label="Resources" prop="resource">
          <a-radio-group v-model="form.resource">
            <a-radio value="1">
              Sponsor
            </a-radio>
            <a-radio value="2">
              Venue
            </a-radio>
          </a-radio-group>
        </a-form-model-item>
        <a-form-model-item label="Activity form" prop="desc">
          <a-input v-model="form.desc" type="textarea" />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click="onSubmit">
            Create
          </a-button>
          <a-button style="margin-left: 10px;" @click="resetForm">
            Reset
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
      },
      options: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake'
                }
              ]
            }
          ]
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men'
                }
              ]
            }
          ]
        }
      ],
      labelCol2: { span: 4 },
      wrapperCol2: { span: 14 },
      other: '',
      form: {
        name: '',
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: 'Please input Activity name', trigger: 'blur' },
          { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
        ],
        region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
        date1: [{ required: true, message: 'Please pick a date', trigger: 'change' }],
        type: [
          {
            type: 'array',
            required: true,
            message: 'Please select at least one activity type',
            trigger: 'change'
          }
        ],
        resource: [{ required: true, message: 'Please select activity resource', trigger: 'change' }],
        desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }]
      }
    }
  },
  methods: {
    onChange(time: any, timeString: string) {
      console.log(time, timeString)
    },
    onChange2(value: any) {
      console.log(value)
    }
  }
}
</script>
<style lang="less" scoped>
.container {
}
</style>
