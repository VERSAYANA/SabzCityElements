/*
Copyright 2016 SabzCity

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

function loadScript(src) {
  var js = document.createElement('script');
  js.src = src;
  document.head.appendChild(js);
}

// Make needed notification message to user (send to notification element to display to user)

// alert on refresh||leave page for unsaved data activity when do with no internet connection