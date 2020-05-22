/*
 *     React UI Builder
 *     Copyright (C) React UI Builder Team
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

export default {
  onUpdate: (registration: any) => {
    if(window.confirm(
      'A new application version available. Do you want to update the application right now without closing application tabs?'
    )){
      registration.waiting.postMessage({type: 'SKIP_WAITING'});
      window.location.reload();
    }
    // registration.unregister().then(() => {
    //   window.location.reload()
    // })
  },
  onSuccess: (registration: any) => {
    console.log(registration)
  },
}
