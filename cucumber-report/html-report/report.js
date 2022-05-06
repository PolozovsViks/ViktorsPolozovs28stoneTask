$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cart.feature");
formatter.feature({
  "line": 1,
  "name": "Login and interact with items",
  "description": "(Main case) As a user, I should be able to login into the website and add one item to the cart.\r\n(Additional case) As a user, I should be able to add and also remove several items to/from cart.\r\n(Additional case) As a user, I should be able to sort the items in list by preference",
  "id": "login-and-interact-with-items",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "(Main case) Login, add item to card, check that the correct item is added",
  "description": "",
  "id": "login-and-interact-with-items;(main-case)-login,-add-item-to-card,-check-that-the-correct-item-is-added",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on the web application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter login \"\u003clogin\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select the desired item \"\u003citem\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I add the product to cart",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I open the cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I see that correct item \"\u003citem\u003e\" is in the cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login-and-interact-with-items;(main-case)-login,-add-item-to-card,-check-that-the-correct-item-is-added;",
  "rows": [
    {
      "cells": [
        "login",
        "password",
        "item"
      ],
      "line": 16,
      "id": "login-and-interact-with-items;(main-case)-login,-add-item-to-card,-check-that-the-correct-item-is-added;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "Sauce Labs Backpack"
      ],
      "line": 17,
      "id": "login-and-interact-with-items;(main-case)-login,-add-item-to-card,-check-that-the-correct-item-is-added;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1630500900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "(Main case) Login, add item to card, check that the correct item is added",
  "description": "",
  "id": "login-and-interact-with-items;(main-case)-login,-add-item-to-card,-check-that-the-correct-item-is-added;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on the web application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter login \"standard_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password \"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select the desired item \"Sauce Labs Backpack\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I add the product to cart",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I open the cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I see that correct item \"Sauce Labs Backpack\" is in the cart",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaskSteps.iAmOnWebApp()"
});
formatter.result({
  "duration": 834941000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 15
    }
  ],
  "location": "TaskSteps.iEnterLogin(String)"
});
formatter.result({
  "duration": 92304800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 18
    }
  ],
  "location": "TaskSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 72869100,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 85803000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack",
      "offset": 27
    }
  ],
  "location": "TaskSteps.iSelectFirstItem(String)"
});
formatter.result({
  "duration": 45014900,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.iAddItemToCart()"
});
formatter.result({
  "duration": 42081600,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.iOpenTheCart()"
});
formatter.result({
  "duration": 62228500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack",
      "offset": 25
    }
  ],
  "location": "TaskSteps.iCheckTheCorrectItem(String)"
});
formatter.result({
  "duration": 25086700,
  "status": "passed"
});
formatter.after({
  "duration": 636407100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "(Additional case) Login, add 4 items to cart, remove 2 items and check that 2 items are left",
  "description": "",
  "id": "login-and-interact-with-items;(additional-case)-login,-add-4-items-to-cart,-remove-2-items-and-check-that-2-items-are-left",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I am on the web application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I enter login \"\u003clogin\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I add 4 items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I open the cart",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I check that 4 items are in the cart",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I remove 3 items from cart",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I see that 1 item is left in the cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "login-and-interact-with-items;(additional-case)-login,-add-4-items-to-cart,-remove-2-items-and-check-that-2-items-are-left;",
  "rows": [
    {
      "cells": [
        "login",
        "password"
      ],
      "line": 30,
      "id": "login-and-interact-with-items;(additional-case)-login,-add-4-items-to-cart,-remove-2-items-and-check-that-2-items-are-left;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 31,
      "id": "login-and-interact-with-items;(additional-case)-login,-add-4-items-to-cart,-remove-2-items-and-check-that-2-items-are-left;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1138178200,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "(Additional case) Login, add 4 items to cart, remove 2 items and check that 2 items are left",
  "description": "",
  "id": "login-and-interact-with-items;(additional-case)-login,-add-4-items-to-cart,-remove-2-items-and-check-that-2-items-are-left;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I am on the web application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I enter login \"standard_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I add 4 items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I open the cart",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I check that 4 items are in the cart",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I remove 3 items from cart",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I see that 1 item is left in the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "TaskSteps.iAmOnWebApp()"
});
formatter.result({
  "duration": 425278100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 15
    }
  ],
  "location": "TaskSteps.iEnterLogin(String)"
});
formatter.result({
  "duration": 70881800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 18
    }
  ],
  "location": "TaskSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 61612300,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 94699000,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.iAddFourItemsToCart()"
});
formatter.result({
  "duration": 197456800,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.iOpenTheCart()"
});
formatter.result({
  "duration": 71375400,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.iCheckFourItemsInCart()"
});
formatter.result({
  "duration": 112829600,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.iRemoveThreeItemsFromCart()"
});
formatter.result({
  "duration": 114042600,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.iSeeOneItemLeftInCart()"
});
formatter.result({
  "duration": 71873000,
  "status": "passed"
});
formatter.after({
  "duration": 648824500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "(Additional case) Login, sort items by preference",
  "description": "",
  "id": "login-and-interact-with-items;(additional-case)-login,-sort-items-by-preference",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "I am on the web application",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I enter login \"\u003clogin\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on filter dropdown menu",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I select the sort \"\u003csort\u003e\" by preference",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I see that items in list are sorted accordingly",
  "keyword": "Then "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "login-and-interact-with-items;(additional-case)-login,-sort-items-by-preference;",
  "rows": [
    {
      "cells": [
        "login",
        "password",
        "sort"
      ],
      "line": 43,
      "id": "login-and-interact-with-items;(additional-case)-login,-sort-items-by-preference;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "Price (low to high)"
      ],
      "line": 44,
      "id": "login-and-interact-with-items;(additional-case)-login,-sort-items-by-preference;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1119313300,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "(Additional case) Login, sort items by preference",
  "description": "",
  "id": "login-and-interact-with-items;(additional-case)-login,-sort-items-by-preference;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "I am on the web application",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I enter login \"standard_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I enter password \"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on filter dropdown menu",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I select the sort \"Price (low to high)\" by preference",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I see that items in list are sorted accordingly",
  "keyword": "Then "
});
formatter.match({
  "location": "TaskSteps.iAmOnWebApp()"
});
formatter.result({
  "duration": 428804600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 15
    }
  ],
  "location": "TaskSteps.iEnterLogin(String)"
});
formatter.result({
  "duration": 70432400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 18
    }
  ],
  "location": "TaskSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 63798300,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 101135400,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.iClickOnFilterDropdown()"
});
formatter.result({
  "duration": 2065524900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (low to high)",
      "offset": 19
    }
  ],
  "location": "TaskSteps.iSelectTheSortOption(String)"
});
formatter.result({
  "duration": 2110915300,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.iSeeItemsSortedAccordingly()"
});
formatter.result({
  "duration": 155332700,
  "error_message": "org.openqa.selenium.support.ui.UnexpectedTagNameException: Element should have been \"select\" but was \"div\"\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027VIKI\u0027, ip: \u0027192.168.25.106\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:47)\r\n\tat stepDefinitions.Steps.TaskSteps.iSeeItemsSortedAccordingly(TaskSteps.java:126)\r\n\tat ✽.Then I see that items in list are sorted accordingly(cart.feature:40)\r\n",
  "status": "failed"
});
formatter.write("Current Page URL is https://www.saucedemo.com/inventory.html");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 908554700,
  "status": "passed"
});
});