export default {
  'GET /sys/menu/list':[
    {
      "path": "/dashboard",
      "name": "dashboard",
      "icon": "dashboard",
      "children": [
        {
          "path": "/dashboard/analysis",
          "name": "analysis-test"
        },
        {
          "path": "/dashboard/monitor",
          "name": "monitor"
        },
        {
          "path": "/dashboard/workplace",
          "name": "workplace"
        }
      ]
    }
  ]
}
