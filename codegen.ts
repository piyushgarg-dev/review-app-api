import type { CodegenConfig } from '@graphql-codegen/cli'
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files'

const config = {
    overwrite: true,
    schema: './graphql/schema/**/*.graphql',

    generates: {
        'graphql/': {
            ...defineConfig(),
            'presetConfig': {
                mode: 'modules',
                typeDefsFileMode: 'modules',
                resolverRelativeTargetDir: '../',
                typeDefsFilePath: '../typeDefs.generated.ts',
            },
        }
    },
    hooks: {
        afterAllFileWrite: ['yarn prettier --write'],
    },
} satisfies CodegenConfig

export default config