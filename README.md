## Setup

1. `$ npm install`
1. `$ npm start`

## Deploy

1. Install [Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation).
1. `$ NODE_ENV=production npm start`
1. `$ ansible-galaxy install -r requirements.yml`
1. `$ ansible-playbook nginx.yml`
1. Copy your SSH key to the `private_key_file` path in `ansible.cfg`.
1. Make sure the address in `hosts` matches that of the server.

## Technologies

- [Ansible](https://www.ansible.com)
- [Prettier](https://prettier.io)
- [Tailwind CSS](https://tailwindcss.com)
