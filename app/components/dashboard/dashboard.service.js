/**
 * @Date:   02-24-2017 17:02:89
 * @Project: 24/7PizzaBOX
 * @Last modified time: 08-21-2017 19:32:17
 * @Copyright: 2017, Kii Corporation www.kii.com
 */

'use strict';

/**
 * Factory for dashboard server calls
 */
app.factory('dashboardService', function($http, CONFIG_DATA, logReport,Session) {
  var dashboardServiceInfo = {};

  dashboardServiceInfo.getOverview = function() {
    var HEADERS = {
      "X-Kii-AppID": CONFIG_DATA.APP_ID,
      "X-Kii-AppKey": CONFIG_DATA.APP_KEY,
      "Authorization": 'Basic' +" " +Session.token,
      "Content-Type": "application/json",
    };

    return $http
      .get(CONFIG_DATA.SERVICES.getOverview ,  {
        headers: HEADERS
      });
  };
  dashboardServiceInfo.getPowerConsumptionByCategory= function() {
    var HEADERS = {
      "X-Kii-AppID": CONFIG_DATA.APP_ID,
      "X-Kii-AppKey": CONFIG_DATA.APP_KEY,
      "Authorization": 'Basic' +" " +Session.token,
      "Content-Type": "application/json",
    };

    return $http
      .get(CONFIG_DATA.SERVICES.getPowerConsumptionByCategory ,  {
        headers: HEADERS
      });
   };

    dashboardServiceInfo.getGpPowerVsDgPower= function() {
        var HEADERS = {
          "X-Kii-AppID": CONFIG_DATA.APP_ID,
          "X-Kii-AppKey": CONFIG_DATA.APP_KEY,
          "Authorization": 'Basic' +" " +Session.token,
          "Content-Type": "application/json",
        };

        return $http
          .get(CONFIG_DATA.SERVICES.getGpPowerVsDgPower ,  {
            headers: HEADERS
          });
      };
  dashboardServiceInfo.getTowerList = function() {
    var QUERYPARAMS = {
      "X-Kii-AppID": CONFIG_DATA.APP_ID,
      "X-Kii-AppKey": CONFIG_DATA.APP_KEY,
      "Authorization": 'Basic' +" " +Session.token,
      "Content-Type": "application/json",
    };

    return $http
      .get(CONFIG_DATA.SERVICES.getTowerList ,  {
        headers:QUERYPARAMS
      });
  };
  dashboardServiceInfo.getTopAlarms = function() {
    var HEADERS = {
      "X-Kii-AppID": CONFIG_DATA.APP_ID,
      "X-Kii-AppKey": CONFIG_DATA.APP_KEY,
      "Authorization": 'Basic' +" " +Session.token,
      "Content-Type": "application/json",
    };

    return $http
      .get(CONFIG_DATA.SERVICES.getTopAlarms ,  {
        headers:HEADERS
      });
  };
  dashboardServiceInfo.getTopAlerts = function() {
    var HEADERS = {
      "X-Kii-AppID": CONFIG_DATA.APP_ID,
      "X-Kii-AppKey": CONFIG_DATA.APP_KEY,
      "Authorization": 'Basic' +" " +Session.token,
      "Content-Type": "application/json",
    };

    return $http
      .get(CONFIG_DATA.SERVICES.getTopAlerts ,  {
        headers:HEADERS
      });
  };
  dashboardServiceInfo.getAlarmTrends = function() {
    var HEADERS = {
      "X-Kii-AppID": CONFIG_DATA.APP_ID,
      "X-Kii-AppKey": CONFIG_DATA.APP_KEY,
      "Authorization": 'Basic' +" " +Session.token,
      "Content-Type": "application/json",
    };

    return $http
      .get(CONFIG_DATA.SERVICES.getAlarmTrends ,  {
        headers:HEADERS
      });
  };
  dashboardServiceInfo.getFireAndSmokeTrends= function() {
      var HEADERS = {
        "X-Kii-AppID": CONFIG_DATA.APP_ID,
        "X-Kii-AppKey": CONFIG_DATA.APP_KEY,
        "Authorization": 'Basic' +" " +Session.token,
        "Content-Type": "application/json",
      };

      return $http
        .get(CONFIG_DATA.SERVICES.getFireAndSmokeTrends,  {
          headers: HEADERS
        });
    };
    




  /**
   * Service call to get machines From KAFKA
   * @param  {JSON} data
   * @return {JSON} response
   */
  dashboardServiceInfo.getAssetsService = function(tenantId, data) {
    var HEADERS = {
      "X-Kii-AppID": CONFIG_DATA.APP_ID,
      "X-Kii-AppKey": CONFIG_DATA.APP_KEY,
      "Content-Type": "application/json",
    };
    logReport.info(JSON.stringify(HEADERS) + "\n" + JSON.stringify(data));
    return $http
      .post(CONFIG_DATA.SERVICES.getAssets + tenantId, data, {
        headers: HEADERS
      });
  };

  /**
   * Service call to get machines
   * @param  {JSON} data
   * @return {JSON} response
   */
  dashboardServiceInfo.getAssets = function(data) {
    return $http
      .post(CONFIG_DATA.SERVER_URL + CONFIG_DATA.DASHBOARD.getMethod, data, {
        headers: CONFIG_DATA.HEADERS
      });
  };

  /**
   * Service call to get machines
   * @param  {JSON} data
   * @return {JSON} response
   */
  dashboardServiceInfo.deleteAsset = function(data) {
    return $http
      .post(CONFIG_DATA.SERVER_URL + CONFIG_DATA.DASHBOARD.deleteMethod, data, {
        headers: CONFIG_DATA.HEADERS
      });
  };

  /**
   * Service call to get issue types
   * @param  {JSON} data
   * @return {JSON} response
   */
  dashboardServiceInfo.getIssueTypes = function(data, tenantId) {
    var HEADERS = {
      "X-Kii-AppID": CONFIG_DATA.APP_ID,
      "X-Kii-AppKey": CONFIG_DATA.APP_KEY,
      "Content-Type": "application/json",
    };
    console.error(JSON.stringify(HEADERS) + "\n" + JSON.stringify(data));
    return $http
      .post(CONFIG_DATA.SERVICES.getIssues + tenantId, data, {
        headers: HEADERS
      });
  };

  /**
   * Service call to get alert issues
   * @param  {JSON} data
   * @return {JSON} response
   */
  dashboardServiceInfo.getStatus = function(data, tenantId) {
    var HEADERS = {
      "X-Kii-AppID": CONFIG_DATA.APP_ID,
      "X-Kii-AppKey": CONFIG_DATA.APP_KEY,
      "Content-Type": "application/json",
    };
    console.error(JSON.stringify(HEADERS) + "\n" + JSON.stringify(data));
    return $http
      .post(CONFIG_DATA.SERVICES.getStatus + tenantId, data, {
        headers: HEADERS
      });
  };



  // dashboardServiceInfo.getStatus = function(data, tenantId) {
  //   var HEADERS = {
  //     "X-Kii-AppID": qx0dbqvjwift
  //
  //     "X-Kii-AppKey": faffb4e6ef2e4ef1befd76da74de64de
  //
  //     "Content-Type": "application/json",
  //   };
  //   console.error(JSON.stringify(HEADERS) + "\n" + JSON.stringify(data));
  //   return $http
  //     .post(CONFIG_DATA.SERVICES.getStatus + tenantId, data, {
  //       headers: HEADERS
  //     });
  // };
  return dashboardServiceInfo;
});
